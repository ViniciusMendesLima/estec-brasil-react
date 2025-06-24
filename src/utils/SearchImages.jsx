import {CompanyAbout} from '../components/images/CompanyAbout'

export default function SearchImages(name) {
    const image = CompanyAbout.find((img) => img.name === name)
  return image ? image : null;
}

