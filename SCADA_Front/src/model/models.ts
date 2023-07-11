export interface AnalogInput{
    id: number,
    name: string,
    driver: string,
    ioAddress: number,
    scanTime: number,
    alarms: Alarm[],
    isOn: boolean,
    lowLimit: number,
    highLimit: number,
    units: string,
    value: number
}

export interface DigitalInput{
    id: number,
    name: string,
    driver: string,
    address: number,
    scanTime: number,
    isOn: boolean
}

export interface InputsDTO {
    analogInputs: AnalogInput[],
    digitalInputs: DigitalInput[]
}

export interface Alarm{
    type: AlarmType,
    priority: number,
    threshold: number,
    unit: string
}

enum AlarmType { Low, Hight }

export interface AnalogOutput{
    Id: number,
    Name: string,
    Address: number,
    LowLimit: number,
    HightLimit: number,
    Unit: string,
    Value: number
}

export interface DigitalOutput{
    Id: number,
    Name: string,
    Address: number,
    Value: number
}

export interface OutputsDTO {
    AnalogOutputs: AnalogOutput[],
    DigitalOutputs: DigitalOutput[]
}

export interface RTU {
    Id: number,
    LowLimit: number,
    HightLimit: number,
    Address: number,
}