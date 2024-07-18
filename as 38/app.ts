function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling describe_city function for different cities
describe_city('Karachi', 'Pakistan');
describe_city('Paris', 'France');
describe_city('Tokyo' , 'Japan');  // This will use the default country 'Unknown'
