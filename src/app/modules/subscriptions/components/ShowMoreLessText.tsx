import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import ReactShowMoreText from 'react-show-more-text'

type Props = {
    lines?: number
    moreText?: string
    lessText?: string
    width?: number
    children: any
}

const ShowMoreLessText:FC<Props> = ({lines, moreText, lessText, width, children}) => {
    const intl = useIntl();
    return (
        <ReactShowMoreText
            lines={lines || 2}
            more={moreText || intl.formatMessage({id: 'SUBSCRIPTIONS.SHOW_MORE'})}
            less={lessText || intl.formatMessage({id: 'SUBSCRIPTIONS.SHOW_LESS'})}
            className="fw-normal"
            anchorClass="show-more-less-clickable"
            expanded={false}
            width={width || 360}
            truncatedEndingComponent={"... "}
        >
            {children}
        </ReactShowMoreText>
    )
}

export default ShowMoreLessText