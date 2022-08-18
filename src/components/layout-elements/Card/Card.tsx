import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseHFullOption,
    parseMarginTopClassNames,
    parseMaxWidthClassNames,
} from 'lib/classnameUtils';
import colorTheme, { defaultColors } from 'lib/colorTheme';
import { BaseColors } from 'lib/objects';

export interface CardProps {
    hFull?: boolean,
    maxWidth?: string,
    shadow?: boolean,
    decoration?: string,
    decorationColor?: string,
    marginTop?: string,
    children: React.ReactNode
}

const parseDecorationAlignment = (decorationAlignment: string) => {
    if (!decorationAlignment) return '';
    switch(decorationAlignment) {
    case 'left':
        return 'border-l-4';
    case 'top':
        return 'border-t-4';
    case 'right':
        return 'border-r-4';
    case 'bottom':
        return 'border-b-4';
    default:
        return '';
    }
};

const Card = ({
    hFull = false,
    maxWidth = '',
    shadow = true,
    decoration = '',
    decorationColor = BaseColors.Blue,
    marginTop,
    children
}: CardProps) => {
    return(
        <div className={ classNames(
            'relative mx-auto text-left rounded-lg p-6 w-full',
            parseHFullOption(hFull),
            parseMaxWidthClassNames(maxWidth),
            getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
            parseMarginTopClassNames(marginTop),
            parseMaxWidthClassNames(maxWidth),
            shadow ? 'shadow' : '',
            getColorVariantsFromColorThemeValue(colorTheme[decorationColor].border).borderColor,
            parseDecorationAlignment(decoration),
        ) }
        >
            { children }
        </div>
    );
};

export default Card;
