import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
  subScribe: "",
};

// 3:
const validationSchema = Yup.object({
  name: Yup.string().required("نام ضروری است"),
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل ضروری است"),
  phoneNumber: Yup.string().required("شماره تماس ضروری است"),

  password: Yup.string()
    .required("رمز عبور ضروری است")
    .min(7, "رمز عبور باید 7 کارکتر باشد"),
  passwordConfirm: Yup.string()
    .required("تکرار رمز عبور ضروری است")
    .oneOf([Yup.ref("password"), null], "رمز عبور باید برابر باشد"),
  subScribe: Yup.string().required("انتخاب کنید"),
});

function SignupPage(props) {
  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="min-h-screen w-[92%] mx-auto mt-5">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-[60%] w-[100%] mx-auto border p-5 rounded-md shadow-md bg-gray-100"
      >
        <div>
          <p className="text-center my-5 border-b border-gray-200 pb-2">
            اگر قبلاً در سایت حساب دارید، لطفاً در
            <Link className="text-blue-500 px-2 " to="/login">
              صفحه ورود
            </Link>
            به سیستم وارد شوید.
          </p>
        </div>
        <h4 className="py-5 text-center">اطلاعات شخصی شما</h4>
        <div>
          <div className="flex items-center">
            <label className="text-sm text-gray-800 w-28"> نام</label>
            <input
              className="bg-gray-300 placeholder:text-sm px-2 py-2 rounded-md w-full"
              type="name"
              name="name"
              placeholder="نام خود را وارد کنید"
              {...formik.getFieldProps("name")}
            />
          </div>
          <div className="mr-24 mt-3">
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-400 text-sm">{formik.errors.name}</div>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center mt-5">
            <label className="text-sm text-gray-800 w-28"> ایمیل </label>
            <input
              className="bg-gray-300 placeholder:text-sm px-2 py-2 rounded-md w-full"
              type="email"
              name="email"
              placeholder="ایمیل خود را وارد کنید"
              {...formik.getFieldProps("email")}
            />
          </div>
          <div className="mr-24 mt-3">
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-400 text-sm">{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center mt-5">
            <label className="text-sm text-gray-800 w-28">شماره تماس</label>
            <input
              className=" bg-gray-300 placeholder:text-sm px-2 py-2 rounded-md w-full"
              type="text"
              name="phoneNumber"
              placeholder="شماره خود را وارد کنید"
              {...formik.getFieldProps("phoneNumber")}
            />
          </div>
          <div className="mr-24 mt-3">
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <div className="text-red-400 text-sm">
                {formik.errors.phoneNumber}
              </div>
            )}
          </div>
        </div>
        <h4 className="py-5 text-center"> رمز عبور شما</h4>

        <div>
          <div className="flex items-center mt-5">
            <label className="text-sm text-gray-800 w-28">رمز عبور</label>
            <input
              className=" bg-gray-300 placeholder:text-sm px-2 py-2 rounded-md w-full"
              type="password"
              name="password"
              placeholder=" رمز عبور"
              {...formik.getFieldProps("password")}
            />
          </div>
          <div className="mr-24 mt-3">
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-400 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center mt-5">
            <label className="text-sm text-gray-800 w-28">تکرار رمز عبور</label>
            <input
              className=" bg-gray-300 placeholder:text-sm px-2 py-2 rounded-md w-full"
              type="password"
              name="passwordConfirm"
              placeholder="تکرار رمز عبور"
              {...formik.getFieldProps("passwordConfirm")}
            />
          </div>
          <div className="mr-24 mt-3">
            {formik.errors.passwordConfirm &&
              formik.touched.passwordConfirm && (
                <div className="text-red-400 text-sm">
                  {formik.errors.passwordConfirm}
                </div>
              )}
          </div>
        </div>

        <h4 className="py-5 text-center">خبرنامه</h4>
        <div className=" mt-5">
          <p className="text-sm text-gray-800 w-28 ml-5">اشتراک در خبرنامه</p>
          <input
            className=" bg-gray-300 placeholder:text-sm px-2 py-2 mx-2"
            type="radio"
            name="subScribe"
            value="0"
            id="0"
            onChange={formik.handleChange}
            checked={formik.values.subScribe === "0"}
          />
          <label htmlFor="0">بله</label>
          <input
            id="1"
            className=" bg-gray-300 placeholder:text-sm px-2 py-2 mx-2"
            type="radio"
            name="subScribe"
            value="1"
            onChange={formik.handleChange}
            checked={formik.values.subScribe === "1"}
          />
          <label htmlFor="1">خیر</label>
        </div>
        <button
          disabled={!formik.isValid}
          type="submit"
          className="mt-8 mb-6 bg-gray-900 text-gray-50 px-3 py-2 rounded-md"
        >
          ثبت و نام
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
