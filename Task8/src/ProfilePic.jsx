export default function ProfilePic({userId}){
    const users = [
        { id: 1, profilePic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3OT3_Ey8JaAOOqRvcdBP_p&ust=1743094291538000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiVrLKaqIwDFQAAAAAdAAAAABAE" },
        { id: 2, profilePic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3OT3_Ey8JaAOOqRvcdBP_p&ust=1743094291538000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiVrLKaqIwDFQAAAAAdAAAAABAE" }
      ];
      const user = users.find(user => user.id === userId);
    return(
        <>
            <img src={user ? user.profilePic : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3OT3_Ey8JaAOOqRvcdBP_p&ust=1743094291538000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiVrLKaqIwDFQAAAAAdAAAAABAE"} alt="Profile" />
        </>
    )
}