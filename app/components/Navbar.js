'use client'
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
    const { data, status } = useSession();
    return (
        <div className='flex'>
            <span>Navbar |</span>
            {status === 'loading' && <span> loading... please wait</span>}
            {status === 'authenticated' ? (
                <>
                    <span className=' mr-2'> hi {data.user.name}</span>
                    <img width={25} height={25} src={data.user.image} alt={data.user.name + ' photo'} />
                    <button className='ml-2' onClick={signOut}>sign out</button>
                </>
            ): <button onClick={() => signIn('google')}>sign in with gooogle</button>
            }
        </div>
    );
}

export default Navbar;