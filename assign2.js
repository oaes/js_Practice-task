function validOtp(otp) {
  // Your code here
  const name = "ph-";
  if (typeof otp !== "string") {
    return "Invalid";
  } else if (name.startsWith("ph-") === false) {
    return "Invalid";
  } else if (otp.length === 8) {
    return true;
  } else {
    return false;
  }
  return otp;
}
console.log(validOtp("ph-12345"));
