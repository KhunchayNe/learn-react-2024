

function MyProfile({ data }: { data: any }) {
    return (
        <>
            <div>MyProfile</div>
            <p>my name is : {data.name}</p>
            <img src={data.imageUrl} alt={data.name} sizes={data.size} />
            </>
    )
}

export default MyProfile