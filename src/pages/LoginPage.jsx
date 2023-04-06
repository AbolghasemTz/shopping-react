import React from "react";
import { useFormik } from "formik";
import { Link, useLocation } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

// 3:
const validationSchema = Yup.object({
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل ضروری است"),
  password: Yup.string()
    .required("رمز عبور ضروری است")
    .min(7, "رمز عبور باید 7 کارکتر باشد"),
});

function LoginPage(props) {
    const location =useLocation()
    console.log(location);
  const onSubmit = async (values) => {
    const { email, password } = values;
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="min-h-screen w-[92%] mx-auto mt-5 ">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-[60%] w-[100%] mx-auto border p-5 rounded-md shadow-md bg-gray-100"
      >
        <div>
          <p className="text-center my-5 border-b border-gray-200 pb-2">
            اگر در سایت حساب ندارید، لطفاً در
            <Link className="text-blue-500 px-2 " to="/signup">
              صفحه ثبت نام
            </Link>
          وارد شوید.
          </p>
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

        <button
          disabled={!formik.isValid}
          type="submit"
          className="mt-8 mb-6 bg-gray-900 text-gray-50 px-3 py-2 rounded-md"
        >
          ورود
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
