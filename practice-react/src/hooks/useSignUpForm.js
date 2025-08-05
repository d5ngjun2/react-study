import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    id: yup.string().required('아이디는 필수입니다.')
    .min(4, '아이디는 최소 4자 이상이어야 합니다.')
    .max(20, '아이디는 최대 20자 이하여야 합니다.'),
    
    name: yup.string().required('이름은 필수입니다.')
      .min(2, '이름은 최소 2자 이상이어야 합니다.')
      .matches(/^[가-힣]+$/, '이름은 한글만 입력 가능합니다.'),

    password: yup.string()
      .required('비밀번호는 필수입니다.')
        .min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),

    confirmPassword: yup.string()
    .required('비밀번호 확인은 필수입니다.')
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
      
    email: yup.string()
        .email('유효한 이메일 주소를 입력해주세요.')
        .required('이메일은 필수입니다.'),  
});

export default function useSignUpForm ()  {
  return {
    signUpSchema,
  };
}