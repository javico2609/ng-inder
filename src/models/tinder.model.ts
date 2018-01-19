interface TinderModel {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: string;
  registered: string;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
  vote:boolean;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Id {
  name: string;
  value?: any;
}

interface Login {
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
}

interface Name {
  title: string;
  first: string;
  last: string;
}