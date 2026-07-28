import axios from 'axios';
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProfileData = () => {
    const dispatch = useDispatch();
    const {profiledata, loading, error} = useSelector((state) => state);

    useEffect(() => {
        dispatch({type: "FETCH_PROFILE_REQUEST"});
        axios.get('http://localhost:3000/users')
        .then((res) => {
            console.log(res.data);
            dispatch({type: "FETCH_PROFILE_SUCCESS", payload: res.data});
        }).catch((err) => {
            console.log(err);
            dispatch({type: "FETCH_PROFILE_FAILURE", payload: err});
        })
    }, [dispatch]);

    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>{error.message}</h2>
    if(profiledata) {
        return (
            <div>
                <h1>This is the profile component</h1>
                <table width="100%" border="1" rules='all'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profiledata.map((user) => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.age}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProfileData