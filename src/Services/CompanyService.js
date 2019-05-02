export const companies = [
 {
    "iso": "5cc98af465323d13f25f622c",
    "company_name": "Samsung"
  },
  {
    "iso": "5cc98af4b9bfed9fe6e633cd",
    "company_name": "Lenovo"
  },
  {
    "iso": "5cc98af474d4e9881232b6e9",
    "company_name": "LG"
  },
  {
    "iso": "5cc98af47feab7457c8f17cb",
    "company_name": "Apple"
  },
  {
    "iso": "5cc98af46ecd0459d0a6cca4",
    "company_name": "Asus"
  },
  {
    "iso": "5cc98af408a5b915e3881359",
    "company_name": "AMD"
  },
  {
    "iso": "5cc98af4cc9e362b91638ffa",
    "company_name": "Sony"
  },
  {
    "iso": "5cc98af4434983902fe62651",
    "company_name": "Dell"
  },
  {
    "iso": "5cc98af4808bf421ddeecc4c",
    "company_name": "Nvidia"
  },
	{
    "iso": "5cc98af4808gf521ddeeec4c",
    "company_name": "Huawei"
  },
	{
    "iso": "5cc98af9008gf521ddyuec9c",
    "company_name": "OnePlus"
  },
  {
    "iso": "5cc98af0b9tfed9fe9e644cd",
    "company_name": "Panasonic"
  },
  {
    "iso": "5cc98af490323d13f25f699c",
    "company_name": "Nikon"
  },
  {
    "iso": "5cc98af07frtb7457c8f17vb",
    "company_name": "Canon"
  }
];

export function getCompanies() {
  return companies.filter(company => company);
}
