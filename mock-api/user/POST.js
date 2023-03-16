module.exports = (request, response) => {
  const user = request.body;
  if (
    user.inforLogin.email == "anhtuan@keyanon.digital" &&
    user.inforLogin.password == "123456"
  ) {
    return response.status(201).send({
      id: 1,
      fullName: "Nguyễn Anh Tuấn",
      dateOfbirth: "13/06/2001",
      email: "anhtuan@keyanon.digital",
      phone: "0946402578",
    });
  } else {
    return response
      .status(404)
      .send(
        "There is some problem with your account, please check your email or password"
      );
  }
};
