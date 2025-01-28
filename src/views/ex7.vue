<template>
  <div>
    <div class="d-flex">
      <p class="font-weight-bold">Exercise 7</p>
      <p class="ml-2">Regsiter Form (API)</p>
    </div>
    <div class="row my-4">
      <div class="col-md-6 col-12 offset-md-3">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">ชื่อ</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="formData.name"
                />
              </div>
              <div class="form-group">
                <label for="national">สัญชาติ</label>
                <input
                  type="text"
                  class="form-control"
                  id="national"
                  v-model="formData.national"
                />
              </div>
              <div class="form-group">
                <label for="email">อีเมล</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="formData.email"
                />
              </div>
              <div class="form-group">
                <label for="age">อายุ</label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  class="form-control"
                  id="age"
                  v-model="formData.age"
                />
              </div>
              <div class="form-group">
                <label for="tel">เบอร์โทร</label>
                <input
                  type="text"
                  class="form-control"
                  id="tel"
                  v-model="formData.tel"
                />
              </div>
              <div class="form-group">
                <label for="address">ที่อยู่</label>
                <textarea
                  class="form-control"
                  id="address"
                  v-model="formData.address"
                ></textarea>
              </div>
              <div class="mb-4">
                <p>เพศ</p>
                <div class="form-check mr-2">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="male"
                    value="male"
                    v-model="formData.gender"
                  />
                  <label class="form-check-label" for="male">ชาย</label>
                </div>
                <div class="form-check mr-2">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="female"
                    value="female"
                    v-model="formData.gender"
                  />
                  <label class="form-check-label" for="female">หญิง</label>
                </div>
              </div>
              <div class="form-group">
                <label for="education">ระดับการศึกษา</label>
                <select
                  class="form-control"
                  id="education"
                  v-model="formData.education"
                >
                  <option value="">เลือกระดับการศึกษา</option>
                  <option value="ประถมศึกษา">ประถมศึกษา</option>
                  <option value="มัธยมศึกษา">มัธยมศึกษา</option>
                  <option value="ปริญญาตรี">ปริญญาตรี</option>
                  <option value="ปริญญาโท">ปริญญาโท</option>
                  <option value="ปริญญาเอก">ปริญญาเอก</option>
                </select>
              </div>
              <div class="form-check">
                <label class="form-check-label d-flex align-items-center">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    value="true"
                    v-model="formData.newsletter"
                  />
                  คุณต้องการรับข่าวสารใช่หรือไม่
                </label>
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Ex7',
  data() {
    return {
      formData: {
        address: '',
        age: '',
        name: '',
        tel: '',
        gender: '',
        education: '',
        email: '',
        newsletter: false,
        national: '',
      },
    };
  },
  computed: {
    ...mapGetters('user', ['errorMessage']),
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions('user', ['getUser', 'updateUser']),

    async fetchData() {
      try {
        const userData = await this.getUser();
        if (userData) {
          this.formData = { ...userData };
        }
      } catch (error) {
        await this.$swal('Error!!', this.errorMessage, 'error');
      }
    },

    async updateData() {
      try {
        await this.updateUser(this.formData);
        if (!this.errorMessage) {
          await this.$swal('Saved data success', '', 'success');
        } else {
          await this.$swal('Error!!', this.errorMessage, 'error');
        }
      } catch (error) {
        await this.$swal('Error!!', this.errorMessage, 'error');
      }
    },

    async handleSubmit() {
      await this.updateData();
    },
  },
};
</script>
