import classes from './PropertyList.module.scss';
import PropertyListItem from '../PropertyListItem/PropertyListItem';
import Grid from '@mui/material/Grid';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PropertyList = () => {

    useEffect(() => {
        // all animations will take 2 seconds to complete
        Aos.init({ duration: 2000 });
    },[])

    const properties = [
        {
            address: '1369 Londonderry Pl, Los Angeles, CA 90069',
            images: 
                {
                    img1: 'https://photos.zillowstatic.com/fp/7e977d7153443dd13efa9e94888d81c0-uncropped_scaled_within_1536_1152.webp',
                    img2: 'https://photos.zillowstatic.com/fp/72305199cafb73c60a74a274dcf0c3d9-cc_ft_768.webp',
                    img3: 'https://photos.zillowstatic.com/fp/ee482a51ae6fb83de4952ca30c533dab-cc_ft_768.webp',
                    img4: 'https://photos.zillowstatic.com/fp/429f8c5145e3dfe6ffb2a5e826cceadd-cc_ft_768.webp',
                },
            price: '$37,995,000',
            description: '6 bed | 10 baths | 14,000 sq. ft.'
        },
        {
            address: '58 Crested Cloud Way, Las Vegas, NV 89135',
            images: 
                {
                    img1: 'https://photos.zillowstatic.com/fp/56da2a9165e220ae573f78be27fba078-cc_ft_1536.webp',
                    img2: 'https://photos.zillowstatic.com/fp/72305199cafb73c60a74a274dcf0c3d9-cc_ft_768.webp',
                    img3: 'https://photos.zillowstatic.com/fp/ee482a51ae6fb83de4952ca30c533dab-cc_ft_768.webp',
                    img4: 'https://photos.zillowstatic.com/fp/429f8c5145e3dfe6ffb2a5e826cceadd-cc_ft_768.webp',
                },
            price: '$12,500,000',
            description: '7 bed | 11 baths | 10,090 sq. ft.'
        },
        {
            address: '54 Innisbrook Ave, Las Vegas, NV 89113',
            images: 
                {
                    img1: 'https://photos.zillowstatic.com/fp/564db359a8076170d808a9bbb55d27df-cc_ft_1536.webp',
                    img2: 'https://photos.zillowstatic.com/fp/72305199cafb73c60a74a274dcf0c3d9-cc_ft_768.webp',
                    img3: 'https://photos.zillowstatic.com/fp/ee482a51ae6fb83de4952ca30c533dab-cc_ft_768.webp',
                    img4: 'https://photos.zillowstatic.com/fp/429f8c5145e3dfe6ffb2a5e826cceadd-cc_ft_768.webp',
                },
            price: '$4,050,000',
            description: '4 bed | 5 baths | 8,245 sq. ft.'
        },
        {
            address: '4180 N Jensen St, Clark County, NV 89129',
            images: 
                {
                    img1: 'https://photos.zillowstatic.com/fp/fc02e28b1abce6aa6d41cb308b5fad74-cc_ft_1536.webp',
                    img2: 'https://photos.zillowstatic.com/fp/72305199cafb73c60a74a274dcf0c3d9-cc_ft_768.webp',
                    img3: 'https://photos.zillowstatic.com/fp/ee482a51ae6fb83de4952ca30c533dab-cc_ft_768.webp',
                    img4: 'https://photos.zillowstatic.com/fp/429f8c5145e3dfe6ffb2a5e826cceadd-cc_ft_768.webp',
                },
            price: '$5,995,000',
            description: '8 bed | 9 baths | 8,900 sq. ft.'
        },
    ]

    
    return (
        <Grid 
        container 
        columns={{ xs:12, md:12 }}
        className={classes.grid}
        >
            {properties.map(property => 
            (<Grid item xs={12} md={6} className={classes.gridItem} data-aos="zoom-in">
                <PropertyListItem property={property}/>
            </Grid>)
            )}
        </Grid>
    )
}

export default PropertyList;