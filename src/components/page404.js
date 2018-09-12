import React from 'react';
import NavBar from "./navbar";

const Page404 = () => {
    return (
        <div>
            <NavBar changeColor={false}/>
            <div class="card">
                <div class="card-body text-center" style={{ paddingTop: 100 }}>
                    <h1>404</h1>
                    <h3 style={{ fontWeight: 300 }}>Page Not Found</h3>
                </div>
            </div>
        </div>
    );
}

export default Page404;