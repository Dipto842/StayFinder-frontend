import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../firebase/Authentication';
import Edit from './Edit';
import { useNavigate } from 'react-router-dom';
import EditModal from './Edit';

const ManageListings = () => {
  const [myListings, setMyListings] = useState([]);

   const [selected, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const {     user } = useContext(AuthContext); // Assuming you have AuthContext set up
 
    useEffect(()=>{
const fetchListings = async () => {
 await   axios.get('https://stayfinder-sarvar.onrender.com/listings')
        .then(response => {
            const listings = response.data;
            
            // Filter listings by the current user's email
            // onsole.log("Filtered Listings:", user.email, );c
           
    
      
      setMyListings(listings);
    })
    }



    fetchListings();
},[])

const UserData =  myListings.filter(listing => listing.hostEmail === user?.email);

const handleDelete = async (_id) => {
  try { 
    await axios.delete(`https://stayfinder-sarvar.onrender.com/listings/${_id}`);
    setMyListings(UserData.filter(listing => listing._id !== _id));  
    alert('Listing deleted successfully');
  } catch (error) {
    console.error('Error deleting listing:', error);
    
  }
};
  const handleEditSave = (updatedData) => {
    // এখানে API কল বা লোকাল স্টেট আপডেট করো
    const updatedListings = myListings.map(item =>
      item.id === updatedData.id ? updatedData : item
    );
    setMyListings(updatedListings);
    setOpenModal(false);
  };

    return (
        <div className='  mx-auto items-center  p-4 my-auto bg'> 
            <table className="table  mt-20 w-full mx-auto   text-slate-800">
  <thead className='text-slate-800  mt-48 '>
    <tr>
      <th>Title</th>
      <th>Location</th>
      <th>Price</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {UserData.map((listing) => (
      
       
      <tr key={listing._id}>
        <td>{listing.title}</td>
        <td>{listing.location}</td>
        <td>${listing.price}</td>
        <td>{listing.status || 'Available'}</td>
        <td className='flex gap-2 items-center'>
          <button    onClick={() => {
              setSelected(listing);
              setOpenModal(true);
            }} className="btn btn-sm btn-info ">Edit</button>
          <button onClick={()=>handleDelete(listing._id)} className="btn btn-sm btn-error">Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      <EditModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        data={selected}
        onSave={handleEditSave}
      />

        </div>
    );
};

export default ManageListings;