import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer>
            <SocialIcon url="https://twitter.com/jain_kuriakose" network="twitter" fgColor="#fff" bgColor="#2b2b2b" style={{ margin: '0 10px' }} />
            <SocialIcon url="https://www.linkedin.com/in/jain-c-kuriakose-0a5022222" network="linkedin" fgColor="#fff" bgColor="#2b2b2b" style={{ margin: '0 10px' }} />
            <SocialIcon url="https://codepen.io/jain08" network="codepen" fgColor="#fff" bgColor="#2b2b2b" style={{ margin: '0 10px' }} />
            <SocialIcon url="https://github.com/zippyzag88" network="github" fgColor="#fff" bgColor="#2b2b2b" style={{ margin: '0 10px' }} />
        </footer>
    );
}
