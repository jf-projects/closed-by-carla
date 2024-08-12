import React, { createContext, useContext } from 'react';

const PropertiesContext = createContext();

export const useProperties = () => useContext(PropertiesContext);

export const PropertiesProvider = ({ children }) => {
    const properties = [
        {
            'name': 'Rockwell Nepo',
            'pictures': [
                'https://rockwellcenternepoangeles.com/wp-content/uploads/2021/06/5_UNIT-A-MASTERS-BEDROOM_2.jpg',
                'https://rockwellcenternepoangeles.com/wp-content/uploads/2021/06/3_UNIT-C-1-BR-LIVING-DINING.jpg',
                'https://rockwellcenternepoangeles.com/wp-content/uploads/2021/06/ibedroom.jpg',
                'https://rockwellcenternepoangeles.com/wp-content/uploads/2021/06/1brcenter.jpg',
                'https://rockwellcenternepoangeles.com/wp-content/uploads/2022/02/nepopool1.jpg',
                'https://rockwellcenternepoangeles.com/wp-content/uploads/2022/02/nepoamenities1.jpg',
                'https://rockwellcenternepoangeles.com/wp-content/uploads/2022/02/nepoclubhouse1.jpg',

            ],
            'location': 'Nepo Center, Angeles, Pampanga',
            'add_info': [
                '4.5 Hectares Property',
                'Premium Lifestyle',
            ],
            'website': 'https://rockwellcenternepoangeles.com/',
            'company': 'Rockwell Land Corporation'
        },
        {
            'name': 'Amaia Scapes Pampanga',
            'pictures': [
                'https://rbgcms-alb-prod.ayalaland.com/content/uploads/images/1619161828659-1007713-pypjpqbmdd.jpg',
            ],
            'location': 'Mexico, Pampanga',
            'add_info': [
                '193 Hectares Property',
                'Low Monthly Amortization',
            ],
            'website': 'https://www.amaialand.com/',
            'company': 'Amaia Land'
        },
        {
            'name': 'Xevera Bacolor',
            'pictures': [
                'https://static.wixstatic.com/media/8da816_6492ce1c22a545d3855cebf662859357~mv2.jpg/v1/fill/w_1024,h_593,fp_0.50_0.50,q_85,enc_auto/8da816_6492ce1c22a545d3855cebf662859357~mv2.jpg',
                'https://static.wixstatic.com/media/8da816_a7cbf2a2380442ae920ee133f2a67fd7~mv2.jpg/v1/fill/w_703,h_407,fp_0.50_0.50,lg_1,q_80,enc_auto/8da816_a7cbf2a2380442ae920ee133f2a67fd7~mv2.jpg',
                'https://static.wixstatic.com/media/8da816_4d7bd7e9d0044e6397817534c2a28808~mv2.jpg/v1/fill/w_720,h_417,fp_0.50_0.50,lg_1,q_80,enc_auto/8da816_4d7bd7e9d0044e6397817534c2a28808~mv2.jpg',
                'https://static.wixstatic.com/media/8da816_b7818b389bfe4ced9d4052576cd7882c~mv2.jpg/v1/fill/w_778,h_450,fp_0.18_0.65,lg_1,q_80,enc_auto/8da816_b7818b389bfe4ced9d4052576cd7882c~mv2.jpg'
            ],
            'location': 'Barangay Calibutbut, Bacolor, Pampanga',
            'add_info': [
                '57.9 Hectares Property',
                '4,406 Constructed Units',
                'Low Monthly Amortization',
            ],
            'website': 'https://www.westchester-realty.com/',
            'company': 'Westchester Realty Corp.',
        },
        {
            'name': 'Xevera Mabalacat',
            'pictures': [
                'https://static.wixstatic.com/media/8da816_a718bda00b6f4009b2eb0ac32b3b06c3~mv2.jpg/v1/fill/w_1520,h_880,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/8da816_a718bda00b6f4009b2eb0ac32b3b06c3~mv2.jpg',
                'https://static.wixstatic.com/media/8da816_bbd8657964354e6a828a90949d56e92f~mv2.jpg/v1/fill/w_800,h_463,fp_0.50_0.50,q_85,enc_auto/8da816_bbd8657964354e6a828a90949d56e92f~mv2.jpg',
                'https://static.wixstatic.com/media/8da816_64bf13ce8b5d4801a1b43e03f992a6ef~mv2.jpg/v1/fill/w_732,h_424,fp_0.50_0.50,q_80,enc_auto/8da816_64bf13ce8b5d4801a1b43e03f992a6ef~mv2.jpg',
                'https://static.wixstatic.com/media/8da816_ebaf8cf2282c4f208823bb7d96a8f476~mv2.jpg/v1/fill/w_800,h_463,fp_0.50_0.50,q_85,enc_auto/8da816_ebaf8cf2282c4f208823bb7d96a8f476~mv2.jpg'
            ],
            'location': 'Barangay Tabun, Mabalacat, Pampanga',
            'add_info': [
                '62 Hectares Property',
                '6,435 Constructed Units',
                'Low Monthly Amortization',
            ],
            'website': 'https://www.westchester-realty.com/',
            'company': 'Westchester Realty Corp.',
        },
        {
            'name': 'Sameera Angeles',
            'pictures': [
                'https://static.wixstatic.com/media/8da816_deab06e8af6c4d64b3d941837e850354~mv2.jpg/v1/fill/w_864,h_500,fp_0.50_0.50,lg_1,q_85,enc_auto/8da816_deab06e8af6c4d64b3d941837e850354~mv2.jpg',
                'https://static.wixstatic.com/media/8da816_9187052c921c4c2393bc8937a4e11570~mv2.jpg/v1/fill/w_640,h_371,fp_0.50_0.50,lg_1,q_80,enc_auto/8da816_9187052c921c4c2393bc8937a4e11570~mv2.jpg'
            ],
            'location': 'Barangay Sapalibutad, Angeles, Pampanga',
            'add_info': [
                '11.8 Hectares Property',
                '1, 843 Constructed Units',
                'Low Monthly Amortization',
            ],
            'website': 'https://www.westchester-realty.com/',
            'company': 'Westchester Realty Corp.',
        },
        {
            'name': 'Deca Homes Cutud',
            'pictures': [
                'https://www.decahomes.com.ph/uploads/5/4/9/5/5495221/deca-homes-pampanga_orig.jpg',
                'https://www.decahomes.com.ph/uploads/5/4/9/5/5495221/living-area.jpg',
                'https://www.decahomes.com.ph/uploads/5/4/9/5/5495221/front.jpg',
                'https://www.decahomes.com.ph/uploads/5/4/9/5/5495221/366754763-1706730336421955-8739300991035958412-n.jpg',
                'https://www.decahomes.com.ph/uploads/5/4/9/5/5495221/366265066-1353470841909292-4874324823175591917-n.jpg'
            ],
            'location': 'Barangay Cutud, Angeles, Pampanga',
            'add_info': [
                'Outdoor gym',
                '​Park and Amphitheater',
                'Clubhouse'
            ],
            'website': 'https://8990holdings.com/',
            'company': '8990 Holdings Inc.',
        },

    ];

    return (
        <PropertiesContext.Provider value={{ properties }}>
            {children}
        </PropertiesContext.Provider>
    );
};
