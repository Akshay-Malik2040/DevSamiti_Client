import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const ProfileEdit = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [skills, setSkills] = useState(user.skills);
    const [emailId, setEmailId] = useState(user.emailId);
    const [gender, setGender] = useState(user.gender);
    const [age, setAge] = useState(user.age);
    const [profileImageUrl, setProfileImageUrl] = useState(user.profileImageUrl);
    const [bio, setBio] = useState(user.bio);
    const allowedEdits = [firstName, lastName, skills, gender, age, profileImageUrl, bio];
    const dispatch=useDispatch();

    const saveProfile= async()=>{
        try{
            const res=await axios.patch(BASE_URL+'/profile/edit',{firstName,lastName,gender,age,skills,profileImageUrl,bio},{withCredentials:true});
            console.log(res);
        } catch(err){
            console.log(err);
        }
    }
return (
    <div className='w-full h-full flex justify-center my-10 gap-10'>
        <div className="card card-dash bg-base-300 w-96 ">
            <div className="card-body">
                <h2 className="card-title self-center font-bold">Update Profile</h2>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">First Name</legend>
                    <input className='px-1 py-1.5' type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Last Name</legend>
                    <input className='px-1 py-1.5' type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input className='px-1 py-1.5' type="email" value={emailId} onChange={() => { }} disabled aria-disabled='true' />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Age </legend>
                    <input className='px-1 py-1.5' type="text" value={age} onChange={(e) => { setAge(e.target.value) }} />
                </fieldset>
                <fieldset className="fieldset flex gap-10">
                    <legend className="fieldset-legend">Gender</legend>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={gender === "other"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Other
                    </label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Profile Image</legend>
                    <input className='px-1 py-1.5' type="text" value={profileImageUrl} onChange={(e) => { setProfileImageUrl(e.target.value) }} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Skills</legend>
                    <input className='px-1 py-1.5' type="text" value={skills} onChange={(e) => { setSkills(e.target.value.split(",")) }} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Bio</legend>
                    <input className='px-1 py-1.5' type="text" value={bio} onChange={(e) => { setBio(e.target.value) }} />
                </fieldset>
                <div className="card-actions justify-end self-center mt-6">
                    <button onClick={saveProfile} className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default ProfileEdit