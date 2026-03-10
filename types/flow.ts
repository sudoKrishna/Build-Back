export interface NodeConfig {
    [key : string] : any
}

export interface FlowNode {
    id : string 
    type : string
    x : number
    y : number
    config?: NodeConfig
}

export interface FlowEdge  {
    id : string
    source : string
    target : string
}