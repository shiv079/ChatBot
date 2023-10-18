// import { createContext,ReactNode,useEffect,useState } from "react";
   

// type User = {
//     name:String;
//     email:String;
// };

// type UserAuth ={
//     isLoggedIn: boolean ;
//     user: User | null;
//     login: (email: string, password:string) => Promise<void>;
//     sigup: (name: string,email:string,password:string) =>Promise<void>;
//     logout: () => Promise<void>;
// };

// const AuthContext = createContext<UserAuth | null>(null);
// const AuthProvider = ({ children }: { children:ReactNode }) =>{
//       const [user, setUser] = useState<User | null>(null);
//       const [isLoggedIn, setIsLoggedIn] = useState(false);

//       //
//       useEffect(() => {
//       //fetch the cookies are valid or not 

//       }, []);
//       const login = async(email:String, password:String)=>{};
//       const signup = async(name:String, email:String, password:string)=>{};
//       const logout = async()=>{};

//       const value={
//         user, 
//         isLoggedIn,
//         login,
//         logout,
//         signup,
//       };
//       return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> 
//     };