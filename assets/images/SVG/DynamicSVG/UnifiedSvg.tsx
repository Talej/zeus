import React from 'react';
import { Svg, Circle, Path } from 'react-native-svg';
import { themeColor } from '../../../../utils/ThemeUtils';

export default function UnifiedSvg({ circle = true, selected = false }) {
    const svgProps = {
        width: '50',
        height: '50',
        viewBox: circle ? '0 0 50 50' : '5 5 40 40',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    };

    const circleProps = {
        cx: '25',
        cy: '25',
        r: '20',
        fill: themeColor('background')
    };

    const pathProps = {
        d: 'M32.127,25.352c1.563-0.419,2.648-1.461,2.818-3.504c0.217-2.805-2.07-4.164-5.143-5.014l0.672-3.833 l-2.412-0.422l-0.65,3.736l-0.473-0.087c-0.476-0.087-0.946-0.175-1.428-0.247l0.652-3.736l-2.476-0.433l-0.652,3.736l-4.918-0.859 l-0.442,2.554c0,0,1.817,0.27,1.757,0.308c0.977,0.188,1.2,0.789,1.192,1.256l-0.786,4.346l-1.065,6.113 c-0.103,0.295-0.382,0.717-1.049,0.604c0.029,0.023-1.776-0.333-1.776-0.333l-0.895,2.715l4.78,0.937l-0.666,3.814l2.395,0.421 l0.666-3.813c0.388,0.08,0.776,0.144,1.152,0.205c0.283,0.045,0.558,0.09,0.819,0.139l-0.666,3.814l2.399,0.42l0.666-3.814 c4.107,0.516,7.125,0.059,8.135-3.57C35.546,27.908,34.361,26.329,32.127,25.352z M30.107,29.539 c-0.422,2.52-5.478,1.419-7.26,1.031l-0.21-0.045l0.809-4.586c0.152,0.03,0.344,0.062,0.566,0.098 C26.036,26.37,30.557,27.109,30.107,29.539z M30.273,21.799c-0.451,2.539-4.744,1.595-6.191,1.275l-0.119-0.024l-0.003-0.001 l0.809-4.585c0.137,0.026,0.313,0.052,0.517,0.083C27,18.814,30.693,19.384,30.273,21.799z',
        fill: selected ? themeColor('background') : themeColor('chain')
    };

    return React.createElement(
        Svg,
        svgProps,
        circle && React.createElement(Circle, circleProps),
        React.createElement(Path, pathProps)
    );
}
