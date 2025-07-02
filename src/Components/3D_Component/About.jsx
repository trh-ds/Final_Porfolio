import Spline from '@splinetool/react-spline';

export default function About() {
    return (
        <Spline scene="https://prod.spline.design/TsxL9kDqvtJbeGhg/scene.splinecode" className={`absolute ${window.innerWidth < 450 ? 'top-60 left-0' : 'top-0 left-70'}`} />
    );
}
