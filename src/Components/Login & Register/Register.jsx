
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/Authentication";
import Swal from "sweetalert2";
import axios from "axios";



const Register = () => {
const {  registerUser }=useContext(AuthContext);
const navegate = useNavigate();
      const {
        register,
        handleSubmit,
    
        
      } = useForm();
    
      const onSubmit = async(data) => {
        registerUser(data.email, data.password)
          .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User registered successfully:", user);
            if(user.accessToken){

 Swal.fire({
  title: "registered Successfully",
  icon: "success",
  draggable: true

});
const userData= {
              fullName: data.fullName,
              phoneNumber: data.phoneNumber,  
              email: data.email,
              role: data.role,
              uid: user.uid,

}
 await axios.post('https://stayfinder-sarvar.onrender.com/users', userData)
navegate('/')
            }
           
            // You can redirect or show a success message here
          })
          .catch((error) => {           
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error:", errorCode, errorMessage);
            // Handle errors here, e.g., show an error message to the user
          });
      };


    return (
        <div>
               <div>
      <div className="  bg-white min-h-screen  flex    justify-center items-center  ">
        <div className=" border-gray-300 bg-[#f7f8f9] text-black border  grid   justify-center   lg:w-[440px] shadow min-h-screen mt-5 mb-2 ">
        
           

         
          
          <form onSubmit={handleSubmit(onSubmit)} className="  mt-7">
             <h1 className="text-3xl  font-bold leading-[135%] mx-auto mb-3">
              
              Create your  <br></br>StayFinde account
            </h1>
          
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Full Name<span className="text-red-700">*</span></label>
              <input   {...register("fullName", { required: true })} className="border-2 rounded-lg  h-10 w-full p-3 px-5 text-sm bg-[#f7f8f9]" type="text" placeholder="Enter your  Name"  />
            </div>

           
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Phone Number<span className="text-red-700">*</span></label>
              <input   {...register("phoneNumber", { required: true })} className="border-2 rounded-lg w-full h-10 p-3 px-5 text-sm bg-[#f7f8f9]" type="number" placeholder="Enter your Phone Number"  />
            </div>
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 ">Email addres<span className="text-red-700">*</span></label>
              <input {...register("email", { required: true })} className="border-2 rounded-lg w-full h-10 p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter  Email addres "  />
            </div>
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Password<span className="text-red-700">*</span></label>
              <input {...register("password", { required: true })} className="border-2 rounded-lg w-full h-10 p-3 px-5 text-sm bg-[#f7f8f9]" type="password" placeholder="Enter your Password"  />
            </div>
            
           <div className="mt-4">
           
           <label className="block mb-1">Account Type</label>
<select
  name="role"
  className="select bg-white select-bordered w-full mb-4"
  {...register("role", { required: true })}
  required
>
  <option value="user">User</option>
  <option value="host">Host</option>
</select>
           </div>

            <div className="  mt-9 ">
            <button className="mx-auto btn btn-primary bg-[#6c25ff] mb-6 h-11 rounded-lg  text-white   w-full">Create Account</button>
            </div>
              <Link to={'/login'}> <h1 className="text-center text-red-400">I have alrede account</h1></Link>
          </form>
        
        </div>

      
      </div>
    </div>
        </div>
    );
};

export default Register;