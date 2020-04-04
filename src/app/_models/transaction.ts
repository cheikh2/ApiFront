export interface Transaction {
    id?:number,
    code?: string,
    nomCEnvoyeur?: string,
    CNIEnvoyeur?: number,
    telEnvoyeur?: number,
    montant?: number,
    nomCEnvoye?: string,
    telEnvoye?: number,
    CNIEnvoye?: number,
    token?:string
}
