import { React, useEffect, useState } from "react";
import GlobalLayout from "../global/GlobalLayout";
import { useSelector, useDispatch} from "react-redux";
import { getContentAsync } from "../redux/modules/contentSlice";



const HomePage = () => {

  const dispatch = useDispatch();
  const content = useSelector((state)=>state.content)
  const [check,setCheck] = useState(false)
  console.log(content)


  useEffect(()=>{
    dispatch(getContentAsync());
  },[check])






  return (
  <GlobalLayout>메인 페이지.
    <div>

    </div>




  </GlobalLayout>
  )
};

export default HomePage;
