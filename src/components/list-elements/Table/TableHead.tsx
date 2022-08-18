import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import { defaultColors } from 'lib/colorTheme';

interface TableHeadProps {
    children: React.ReactElement[] | React.ReactElement
}

const TableHead = ({
    children,
}: TableHeadProps) => (
    <thead className={ classNames(
        getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
        'font-semibold text-left'
    ) }>
        { children }
    </thead>
);

export default TableHead;
