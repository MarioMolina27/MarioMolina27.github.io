/* eslint-disable react/prop-types */
import './loader.scss'
export default function Loader({ loading }) {
    return (
        <div className={`loader-container ${loading ? '' : 'loading-finished'}`}>
            <div className="loader"></div>

            <div className="loading loading04">
                <span>C</span>
                <span>A</span>
                <span>R</span>
                <span>G</span>
                <span>A</span>
                <span>N</span>
                <span>D</span>
                <span>O</span>
            </div>
        </div>
    )
}