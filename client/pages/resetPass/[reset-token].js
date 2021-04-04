import {ResetPassPage} from "@eachbase/pages"

export default function ResetPass(props){
  return <ResetPassPage {...props}/>
}

ResetPass.getInitialProps = (req,res)=>
  ({resetToken:req.query["reset-token"]})