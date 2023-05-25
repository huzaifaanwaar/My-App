import { Formik } from "formik";
import * as Yup from "yup";

function Form() {
  return (
    <>
      <div className="container bg-success align-center text-white mb-5 mt-3 p-4 w-50">
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            password: "",
            confirm_password: "",
            you_birth_year: "",
            gender: "",
            city: "",
            where_live: "",
            mobile: "",
            current_address: "",
            id_card: "",
          }}
          validationSchema={Yup.object({
            fullname: Yup.string()
              .min(4, "Too Short!")
              .max(50, "Too Long!")
              .required("ٖFull name is Required"),
            email: Yup.string()
              .email("Invalid email")
              .required("Email is Requried"),
            password: Yup.string()
              .min(8, "password must be at least 8 characters")
              .required("Password is requried"),
            confirm_password: Yup.string()
              .oneOf([Yup.ref("password"), null], "Password must be match")
              .required("Confirm password is requried"),
            you_birth_year: Yup.string().required("Birth Year is required"),
            gender: Yup.string().required("Your Gender is required"),
            city: Yup.string().required("Your City is required"),
            where_live: Yup.string().required("Required"),
            mobile: Yup.number()
              .typeError("Only use number")
              .required("Mobile number is required"),
            current_address: Yup.string().required(
              "Current Address is required"
            ),
            id_card: Yup.number()
              .typeError("Only use number")
              .required("ID Card number is required"),
          })}
          onSubmit={(values) => {
            console.log("values", values);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <h3 className="text-center fs-2">Sign Up</h3>
              <hr />
              <div className="col">
                <label>Full Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  {...formik.getFieldProps("fullname")}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="text-danger">{formik.errors.fullname}</div>
                ) : null}
              </div>
              <br />
              <div className="col">
                <label>Email :</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>

              <br />
              <div className="row">
                <div className="col-6">
                  <label>Password :</label>
                  <input
                    type="password"
                    className="form-control"
                    aria-label="Password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="col-6">
                  <label>Confirm Password :</label>
                  <input
                    type="password"
                    className="form-control"
                    aria-label="Confirm Password"
                    placeholder="Confirm Password"
                    {...formik.getFieldProps("confirm_password")}
                  />
                  {formik.touched.confirm_password &&
                  formik.errors.confirm_password ? (
                    <div className="text-danger">
                      {formik.errors.confirm_password}
                    </div>
                  ) : null}
                </div>
              </div>
              <br />
              <div>
                <label>Your Birth Year :</label>
                <div className="input-group">
                  <select
                    class="form-select"
                    {...formik.getFieldProps("you_birth_year")}
                  >
                    <option value="">Choose...</option>
                    <option value="1">1977</option>
                    <option value="2">1978</option>
                    <option value="3">1979</option>
                    <option value="4">1980</option>
                    <option value="5">1981</option>
                    <option value="6">1982</option>
                  </select>
                </div>
                {formik.touched.you_birth_year &&
                formik.errors.you_birth_year ? (
                  <div className="text-danger">
                    {formik.errors.you_birth_year}
                  </div>
                ) : null}
              </div>
              <br />
              <div>
                <label>Gender :</label>
                <div className="input-group">
                  <select
                    class="form-select"
                    {...formik.getFieldProps("gender")}
                  >
                    <option value="">Choose...</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="text-danger">{formik.errors.gender}</div>
                ) : null}
              </div>
              <br />
              <div>
                <label>City :</label>
                <div className="input-group">
                  <select class="form-select" {...formik.getFieldProps("city")}>
                    <option value="">Choose...</option>
                    <option value="1">Khanpur</option>
                    <option value="2">Rahim Yar Khan</option>
                    <option value="3">Lahore</option>
                    <option value="4">Karachi</option>
                    <option value="5">Bahawalpur</option>
                    <option value="6">Multan</option>
                  </select>
                </div>
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-danger">{formik.errors.city}</div>
                ) : null}
              </div>
              <br />
              <div>
                <label>Where Do You Live :</label>
                <div className="input-group">
                  <select
                    class="form-select"
                    {...formik.getFieldProps("where_live")}
                  >
                    <option value="">Choose...</option>
                    <option value="1">Khanpur</option>
                    <option value="2">Rahim Yar Khan</option>
                    <option value="3">Lahore</option>
                    <option value="4">Karachi</option>
                    <option value="5">Bahawalpur</option>
                    <option value="6">Multan</option>
                  </select>
                </div>
                {formik.touched.where_live && formik.errors.where_live ? (
                  <div className="text-danger">{formik.errors.where_live}</div>
                ) : null}
              </div>
              <br />
              <div className="col">
                <label>Mobile No :</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Mobile No"
                  placeholder="i.e. +92 304 56XXXXX"
                  {...formik.getFieldProps("mobile")}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="text-danger">{formik.errors.mobile}</div>
                ) : null}
              </div>
              <br />
              <div className="col">
                <label>Current Address :</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Current Address"
                  placeholder="Current Address"
                  {...formik.getFieldProps("current_address")}
                />
                {formik.touched.current_address &&
                formik.errors.current_address ? (
                  <div className="text-danger">
                    {formik.errors.current_address}
                  </div>
                ) : null}
              </div>
              <br />
              <div className="col">
                <label>Id Card # :</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Id Card #"
                  placeholder="i.e. 31XXX-75XXXXX-3"
                  {...formik.getFieldProps("id_card")}
                />
                {formik.touched.id_card && formik.errors.id_card ? (
                  <div className="text-danger">{formik.errors.id_card}</div>
                ) : null}
              </div>
              <br />
              <div class="d-grid gap-2">
                <button className="btn btn-dark" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
export default Form;
