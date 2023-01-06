
 const validate = (value)=>{
    let err = {}
    if(!value.checkoutemail){
      err.email = "*Please enter your email."

    }
    else if(!value.checkoutphone){
      err.phone = "*Please enter your phone."

    }
    else if(!value.checkoutname){
      err.name = "*Please enter your name."

    }
    else if(!value.checkoutaddress){
      err.address = "*Please enter your address."

    }
    else if(!value.checkoutcity){
      err.city = "*Please enter your city."

    }
     else if(!value.checkoutcountry){
      err.country = "*Please enter your country."

    }
    else if(!value.checkoutpostal){
      err.postal = "*Please enter your Postal code."

    }else {
        err.loading = true
    }
    return err

  }
export default validate