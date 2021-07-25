import firebase from '../firbase';

const Users = ()=> {
    return (
      <h1>{`welcome${firebase.auth.currentUser.name}`}</h1>
    )
}

export default Users;