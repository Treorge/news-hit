<script setup>
import { userUpdatePwdService } from '@/api/user'
import { ref } from 'vue'

const formRef = ref()
const rules = {
  old_pwd: [
    { required: true, message: '请输入旧密码', trigger: 'blur' },
    {
      pattern: /^\S{6,12}$/,
      message: '密码必须是6-12位的非空字符串',
      trigger: 'blur'
    }
  ],
  new_pwd: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
  re_pwd: [
    { required: true, message: '再次输入新密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== form.value.new_pwd) {
          callback(new Error('两次输入的密码不一致'))
        } else if (value === form.value.old_pwd) {
          callback(new Error('新密码不能与旧密码一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}
const form = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})

const submit = async () => {
  await formRef.value.validate()
  await userUpdatePwdService(form.value)
  reset()
  ElMessage({
    message: '修改成功',
    type: 'success'
  })
}

const reset = () => {
  formRef.value.resetFields()
}
</script>

<template>
  <page-container title="修改密码">
    <el-row>
      <el-col :span="12">
        <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
          <el-form-item label="旧密码" prop="old_pwd">
            <el-input v-model="form.old_pwd" type="password" />
          </el-form-item>
          <el-form-item label="新密码" prop="new_pwd">
            <el-input v-model="form.new_pwd" type="password" />
          </el-form-item>
          <el-form-item label="确认新密码" prop="re_pwd">
            <el-input v-model="form.re_pwd" type="password" />
          </el-form-item>
        </el-form>
        <br />
        <div class="btns">
          <el-button type="primary" @click="submit" size="large"
            >修改密码</el-button
          >
          <el-button @click="reset" class="resetButton" size="large"
            >重置</el-button
          >
        </div>
      </el-col>
    </el-row>
  </page-container>
</template>

<style lang="scss" scoped>
.btns {
  margin-left: 30px;
  :deep() {
    .resetButton {
      width: 110px;
    }
  }
}
</style>
