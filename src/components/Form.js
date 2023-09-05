import React from "react";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {addUser, deleteUser} from "../Redux/userSlice";

const Form = () => {
   const dispatch = useDispatch();
   const users = useSelector((state) => state.userReducer.users);

   console.log(users);

   return (
      <div>
         <h1>Anywhere in your app!</h1>
         <Formik
            initialValues={{email: "", password: ""}}
            validate={(values) => {
               const errors = {};
               if (!values.email) {
                  errors.email = "Required";
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                  errors.email = "Invalid email address";
               }
               return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
               setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  console.log(values);
               }, 400);
            }}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               handleSubmit,
               isSubmitting,
               /* and other goodies */
            }) => (
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                     dispatch(addUser(values));
                     //  values.email = "";
                     //  values.password = "";
                  }}
               >
                  <input
                     type="email"
                     name="email"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                     type="password"
                     name="password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                     Submit
                  </button>
               </form>
            )}
         </Formik>
         {users?.map((user, i) => {
            return (
               <span key={i}>
                  <button onClick={() => dispatch(deleteUser(user.email))}>
                     <h2>{user.email}</h2>
                  </button>
               </span>
            );
         })}
      </div>
   );
};

export default Form;
