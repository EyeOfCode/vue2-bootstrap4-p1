<template>
  <div>
    <div class="d-flex">
      <p class="font-weight-bold">Exercise 2</p>
      <p class="ml-2">Regsiter Form (v-model)</p>
    </div>
    <div class="row my-4">
      <div class="col-md-6 col-12">
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
                  @input="validateField('name')"
                />
                <span class="text-danger" v-if="errors.name">
                  {{ errors.name }}
                </span>
              </div>
              <div class="form-group">
                <label for="tel">เบอร์โทร</label>
                <input
                  type="text"
                  class="form-control"
                  id="tel"
                  v-model="formData.tel"
                  @input="validateField('tel')"
                />
                <span class="text-danger" v-if="errors.tel">
                  {{ errors.tel }}
                </span>
              </div>
              <div class="form-group">
                <label for="address">ที่อยู่</label>
                <textarea
                  class="form-control"
                  id="address"
                  v-model="formData.address"
                  @input="validateField('address')"
                ></textarea>
                <span class="text-danger" v-if="errors.address">
                  {{ errors.address }}
                </span>
              </div>
              <div class="mb-4">
                <p>เพศ</p>
                <div class="form-check mr-2">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="male"
                    value="ชาย"
                    v-model="formData.sex"
                    @input="validateField('sex')"
                  />
                  <label class="form-check-label" for="male">ชาย</label>
                </div>
                <div class="form-check mr-2">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="female"
                    value="หญิง"
                    v-model="formData.sex"
                    @input="validateField('sex')"
                  />
                  <label class="form-check-label" for="female">หญิง</label>
                </div>
                <span class="text-danger" v-if="errors.sex">
                  {{ errors.sex }}
                </span>
              </div>
              <div class="form-group">
                <label for="level">ระดับการศึกษา</label>
                <select
                  class="form-control"
                  id="level"
                  v-model="formData.level"
                  @change="validateField('level')"
                >
                  <option value="">เลือกระดับการศึกษา</option>
                  <option value="ประถมศึกษา">ประถมศึกษา</option>
                  <option value="มัธยมศึกษา">มัธยมศึกษา</option>
                  <option value="ปริญญาตรี">ปริญญาตรี</option>
                  <option value="ปริญญาโท">ปริญญาโท</option>
                  <option value="ปริญญาเอก">ปริญญาเอก</option>
                </select>
                <span class="text-danger" v-if="errors.level">
                  {{ errors.level }}
                </span>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div v-if="submitted">
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <p class="m-0">ชื่อ:</p>
                <p class="ml-2 m-0">{{ formData.name }}</p>
              </div>
              <div class="d-flex">
                <p class="m-0">เบอร์โทร:</p>
                <p class="ml-2 m-0">{{ formData.tel }}</p>
              </div>
              <div class="d-flex">
                <p class="m-0">ที่อยู่:</p>
                <p class="ml-2 m-0">{{ formData.address }}</p>
              </div>
              <div class="d-flex">
                <p class="m-0">เพศ:</p>
                <p class="ml-2 m-0">{{ formData.sex }}</p>
              </div>
              <div class="d-flex">
                <p class="m-0">ระดับการศึกษา:</p>
                <p class="ml-2 m-0">{{ formData.level }}</p>
              </div>
              <div class="mt-4">
                <button class="btn btn-outline-danger w-100" @click="clearData">
                  Clear Data
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isFormValid">
          <Alert type="danger" msg="Invalid form." :closeBox="clearData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/common/Alert.vue';

export default {
  name: 'Ex2',
  components: {
    Alert,
  },
  data() {
    return {
      formData: {
        name: '',
        tel: '',
        address: '',
        sex: 'ชาย',
        level: '',
      },
      errors: {
        name: '',
        tel: '',
        address: '',
        sex: '',
        level: '',
      },
      submitted: false,
    };
  },
  computed: {
    isFormValid() {
      return !Object.values(this.errors).some((error) => error !== '');
    },
  },
  methods: {
    clearData() {
      this.formData = {
        name: '',
        tel: '',
        address: '',
        sex: 'ชาย',
        level: '',
      };
      this.errors = {
        name: '',
        tel: '',
        address: '',
        sex: '',
        level: '',
      };
      this.submitted = false;
    },
    validateField(field) {
      this.errors[field] = '';
      switch (field) {
        case 'name': {
          if (!this.formData.name) {
            this.errors.name = 'กรุณากรอกชื่อ';
          } else {
            this.errors.name = '';
          }
          break;
        }
        case 'tel': {
          const phoneNumber = this.formData.tel.replace(/\s+|-/g, '');
          const numberOnly = /^\d+$/.test(phoneNumber);
          const thaiMobilePattern = /^0\d{9}$/;

          if (!phoneNumber) {
            this.errors.tel = 'กรุณากรอกเบอร์โทรศัพท์';
          } else if (!numberOnly) {
            this.errors.tel = 'กรุณากรอกเฉพาะตัวเลขเท่านั้น';
          } else if (!thaiMobilePattern.test(phoneNumber)) {
            this.errors.tel =
              'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (ตัวอย่าง: 0812345678)';
          } else {
            this.errors.tel = '';
          }
          break;
        }
        case 'address': {
          if (!this.formData.address) {
            this.errors.address = 'กรุณากรอกที่อยู่';
          } else {
            this.errors.address = '';
          }
          break;
        }
        case 'sex': {
          if (!this.formData.sex) {
            this.errors.sex = 'กรุณาเลือกเพศ';
          } else {
            this.errors.sex = '';
          }
          break;
        }
        case 'level': {
          if (!this.formData.level) {
            this.errors.level = 'กรุณาเลือกระดับการศึกษา';
          } else {
            this.errors.level = '';
          }
          break;
        }
        default:
          break;
      }
    },
    validateForm() {
      ['name', 'tel', 'address', 'sex', 'level'].forEach((field) => {
        this.validateField(field);
      });
      return !Object.values(this.errors).some((error) => error !== '');
    },
    handleSubmit() {
      if (this.validateForm()) {
        this.submitted = true;
      }
    },
  },
};
</script>
