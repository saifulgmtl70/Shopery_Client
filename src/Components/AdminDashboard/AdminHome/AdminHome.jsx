import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    return (
        <div className="px-12 my-20 py-12">
             <Helmet>
                <title>Shopery | Admin Home </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <h2>Admin Home</h2>
        </div>
    );
};

export default AdminHome;