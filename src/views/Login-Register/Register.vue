<template>
  <v-app>
    <div class="wrap-register">
      <v-form class="register-form" ref="reg" @submit.prevent="submited">
        <h2>Стань членом клуба<br> Avenue Montaigne</h2>
        <div class="wrap-name">
          <v-text-field
            v-model.trim="email"
            label="Адресс электронной почты"
            outlined
            dense
            rounded
            color="black"
            :rules="emailRules"
          ></v-text-field>
          <v-text-field
            v-model.trim="password"
            label="Пароль"
            outlined
            dense
            rounded
            color="black"
            :rules="passwordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
          <v-text-field
            v-model.trim="name"
            label="Имя"
            outlined
            dense
            rounded
            color="black"
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            v-model.trim="surname"
            label="Фамилия"
            outlined
            dense
            rounded
            color="black"
            :rules="surnameRules"
          ></v-text-field>
          <p v-if="errorText" style="color:red;text-align:center;">{{errorText}}</p>
          <div class="text-center">
            <v-btn rounded block type="submit" color="black" dark>Присоединиться</v-btn>
          </div>
          <div class="terms">
            <p>Создавая аккаунт, ты принимаешь
              <br>
              <a>Политику конфиденциальности</a> и
              <a>Условия использования</a>
              <br>
              Avenue Montaigne
            </p>
          </div>
          <div class="not-reg">
            <p>Уже есть аккаунт? <router-link to="/login"><span>Войти.</span></router-link></p>
          </div>
        </div>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import messages from '@/utils/messages.js'
export default {
  name: 'login',
  metaInfo: {
    title: 'Регистрация'
  },
  data () {
    return {
      email: '',
      password: '',
      name: '',
      surname: '',
      show: false,
      user: null,
      errorText: '',
      emailRules: [
        value => !!value || 'Введите адрес электронной почты',
        v => /.+@.+\..+/.test(v) || 'Введите действительный адрес электронной почты'
      ],
      passwordRules: [
        value => !!value || 'Введите пароль',
        v => v.length >= 8 || 'Минимальная длина 8 символов'
      ],
      nameRules: [
        value => !!value || 'Введите имя',
        v => /[a-zA-Zа-яА-Я]+/.test(v) || 'Введите действительное имя'
      ],
      surnameRules: [
        value => !!value || 'Введите фамилию',
        v => /[a-zA-Zа-яА-Я]+/.test(v) || 'Введите действительную фамилию'
      ]
    }
  },
  methods: {
    async submited () {
      if (this.$refs.reg.validate()) {
        const user = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password
        }
        try {
          await this.$store.dispatch('register', user)
          this.errorText = ''
          this.$router.push('/')
        } catch (e) {
          this.errorText = messages[e.code]
        }
      }
    }
  },
  mounted () {
    scrollTo(0, 0)
  },
  beforeDestroy () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
.wrap-register {
  display: flex;
  justify-content: center;
  margin: 0px 46px;
  height: 100%;
  padding-top: 100px;
}
.register-form {
  display: flex;
  flex-direction: column;
  width: 350px;
  h2 {
    text-align: center;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  .terms {
    margin-top: 20px;
    p {
      text-align: center;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 12px;
      color: #8D8D8D;
      a {
        text-decoration: underline;
        color: #8D8D8D;
      }
    }
  }
  .not-reg {
    margin-top: 1rem;
    p {
      text-align: center;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 12px;
      color: #8D8D8D;
    }
    a {
        text-decoration: underline;
        color: black;
      }
  }
}
.wrap-name {
  margin-top: 20px;
}
</style>
