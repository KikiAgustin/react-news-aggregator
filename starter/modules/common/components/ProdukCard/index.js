import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/Link'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Cardmedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const usesStyles = makeStyles({
    card: {
        maxWidth: 360
    },
    image: {
        height: 140
    }
})

const ProdukCard = ({ urlToImage, title, publishedAt, content, url }) => {
    const classess = usesStyles()
    return (

        <Card>
            <div className={classess.card} >
                <Cardmedia
                    className={classess.image}
                    image={urlToImage}
                    title={title}
                />
                <CardContent>
                    <Grid container direction="column" >
                        <Typography gutterBottom variant="subtitle2" component="h2" >
                            {title}
                        </Typography>
                    </Grid>
                </CardContent>
            </div>
        </Card>

    )
}

ProdukCard.propTypes = {
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
}

export default ProdukCard