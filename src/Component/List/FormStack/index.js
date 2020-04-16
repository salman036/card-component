import React from 'react';

import Offentliches from '../Öffentliches/index'
import { PersonalInformation } from '../Personalnformation/index';

import {personalInformation, officialMockData} from '../../../tableMockData'

const FormStack = () => {

    const oficialData = officialMockData.map(data => {
        return data
    });

    const perosnalData = personalInformation.map(data => {
        return data
    })
    return (
        <div className="form">
            <Offentliches data = {oficialData}/>
            <PersonalInformation data={perosnalData}/>
        </div>
    )
}

export default FormStack
