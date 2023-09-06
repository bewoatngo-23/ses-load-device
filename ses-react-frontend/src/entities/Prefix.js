function Prefix(
  typeSystem,
  typeDevice,
  country,
  province,
  codeCustomer,
  codeProject,
  a1,
  a2,
  a3,
  a4,
  a5,
  crc,
  func,
  messageType
) {
  this.typeSystem = typeSystem;
  this.typeDevice = typeDevice;
  this.country = country;
  this.province = province;
  this.codeCustomer = codeCustomer;
  this.codeProject = codeProject;
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;
  this.a4 = a4;
  this.a5 = a5;
  this.crc = crc;
  this.func = func;
  this.messageType = messageType;
}

export default Prefix;
