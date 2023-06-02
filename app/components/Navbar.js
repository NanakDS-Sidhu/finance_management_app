'use client'
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
    const { data, status } = useSession();
    return (
        <div>
            <h1>Navbar</h1>
            {status === 'loading' && <h1> loading... please wait</h1>}
            {status === 'authenticated' ? (
                <div>
                    <h1> hi {data.user.name}</h1>
                    <img src={data.user.image} alt={data.user.name + ' photo'} />
                    <button onClick={signOut}>sign out</button>
                </div>
            ): <button onClick={() => signIn('google')}>sign in with gooogle</button>
            }
        </div>
    );
}

export default Navbar;