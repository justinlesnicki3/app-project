import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants/constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[35vh] px-4 my-6">
            <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />

            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({...form,
                email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({...form,
                password: e })}
                otherStyles="mt-7"
            />
            <View style={{alignItems: 'center', marginTop: 28}}>
              <CustomButton 
              title="Sign In"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
            </View>
            

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})