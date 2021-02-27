import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>

            <Link href="/" >
                <a>Menuju Ke Halaman Home</a>
            </Link>

            <Avatar alt="Remy Sharp" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/38/38c2bca1ea446adea699898e8188c40669b77176" />

            <Chip label="Mencoba Chip" />

        </div>
    )
}

export default About

