<template>
  <v-app>
    <div class="wrap-login">
      <v-form class="login-form" ref="form" @submit.prevent="submited">
        <h2>Вход в аккаунт <br> Avenue Montaigne</h2>
        <div class="wrap-name">
          <v-text-field
            label="Адресс электронной почты"
            v-model.trim="email"
            outlined
            dense
            rounded
            color="black"
            :rules="emailRules"
          ></v-text-field>
          <v-text-field
            label="Пароль"
            v-model.trim="password"
            outlined
            dense
            rounded
            color="black"
            :rules="passwordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
          <p v-if="errorText" style="color:red;text-align:center;">{{errorText}}</p>
          <div class="text-center">
            <v-btn rounded block color="black" type="submit" dark>Войти</v-btn>
          </div>
          <div class="terms">
            <p>Выполняя вход, ты принимаешь
              <br>
              <a>Политику конфиденциальности</a> и
              <a>Условия использования</a>
              <br>
              Avenue Montaigne
            </p>
          </div>
          <div class="not-reg">
            <p>Еще нет аккаунта? <router-link to="/register"><span>Присоединяйся.</span></router-link></p>
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
    title: 'Логин'
  },
  data () {
    return {
      email: '',
      password: '',
      errorText: '',
      show: false,
      emailRules: [
        value => !!value || 'Введите адрес электронной почты',
        v => /.+@.+\..+/.test(v) || 'Введите действительный адрес электронной почты'
      ],
      passwordRules: [
        value => !!value || 'Введите пароль',
        v => v.length >= 8 || 'Минимальная длина 8 символов'
      ]
    }
  },
  methods: {
    async submited () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        try {
          await this.$store.dispatch('login', user)
          this.errorText = ''
          this.$router.push('/')
        } catch (e) {
          this.errorText = messages[e.code]
        }
      }
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  beforeDestroy () {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
.wrap-login {
  display: flex;
  justify-content: center;
  margin: 0px 46px;
  height: 100%;
  padding-top: 100px;
}
.login-form {
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
