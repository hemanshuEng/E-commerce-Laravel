<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductTableseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' => 'Cloudfoam Racer Mens Trainers',
            'slug' => 'cloudfoam-racer-mens-trainers',
            'details' => 'adidas Cloudfoam Racer Mens Trainers',
            'price' => 32,
            'description' => 'These adidas Cloudfoam Racer Trainers have a lace up fastening, padded ankle collar, padded tongue and cushioned Cloudfoam insole for superior comfort duirng wear, while the lightweight mesh upper provides a flexible and breathable feel. The thick Cloudfoam midsole adds further bounce and cushioning, with a textured sole and grip pads for traction, while the trainers are completed with adidas branding. '
        ]);
        Product::create([
            'name' => 'Energy Cloud 2 Mens Trainers',
            'slug' => 'energy-cloud-mens-trainers',
            'details' => 'adidas Energy Cloud 2 Mens Trainers',
            'price' => 28,
            'description' => 'The adidas Energy Cloud 2 Trainers feature a highly breathable and lightweight mesh upper that allows cooling air to flow around your feet, complete with a 3D moulded Fitpanel overlay to lock the laces and midsole together for support.'
        ]);
        Product::create([
            'name' => 'Run 70s Mens Trainers',
            'slug' => 'run-70s-mens-trainers',
            'details' => 'adidas Run 70s Mens Trainers',
            'price' => 32,
            'description' => '
            These adidas Run 70s Mens Trainers have been crafted with an Ortholite Float insole which delivers great comfort alongside the foam midsole and plush ankle collar. The trainers have a lightweight knit-like upper, whilst the textured outsole provides great traction and the adidas branding completes the stylish look. '
        ]);
        Product::create([
            'name' => 'Axis SL Sn99',
            'slug' => 'axis-SL-sn99',
            'details' => 'Puma Running Shoes',
            'price' => 25,
            'description' => 'These Puma Cloudfoam Racer Trainers have a lace up fastening, padded ankle collar, padded tongue and cushioned Cloudfoam insole for superior comfort duirng wear, while the lightweight mesh upper provides a flexible and breathable feel. The thick Cloudfoam midsole adds further bounce and cushioning, with a textured sole and grip pads for traction, while the trainers are completed with adidas branding. '
        ]);
        Product::create([
            'name' => 'Gel Stormer 2 Running Trainers Mens',
            'slug' => 'gel-stormer-running-trainers-mens',
            'details' => 'Asics Gel Stormer 2 Running Trainers Mens',
            'price' => 40,
            'description' => 'The Asics Gel Stormer 2 Running Trainers are designed with a cushioned ankle collar and tongue for a locked-in fit, which provides comfort underfoot. A removable sockliner is great for allowing the use of custom orthotics, and the lightweight structure features a mesh upper for a breathable design. '
        ]);
        Product::create([
            'name' => 'Reago Essential Trainers Mens',
            'slug' => 'reago-essential-trainers-mens',
            'details' => 'Reebok Reago Essential Trainers Mens',
            'price' => 22,
            'description' => 'These adidas Cloudfoam Racer Trainers have a lace up fastening, padded ankle collar, padded tongue and cushioned Cloudfoam insole for superior comfort duirng wear, while the lightweight mesh upper provides a flexible and breathable feel. The thick Cloudfoam midsole adds further bounce and cushioning, with a textured sole and grip pads for traction, while the trainers are completed with adidas branding. '
        ]);
        Product::create([
            'name' => 'Spotlight Hybrid Football Boots Mens',
            'slug' => 'spotlight-hybrid-football-boots-mens',
            'details' => 'Under Armour Spotlight Hybrid Football Boots Mens',
            'price' => 54,
            'description' => 'Associate with speed on the pitch, wearing the Under Armour Spotlight Hybrid Football Boots. Designed with a zip front fastening, with a neoprene compression sleeve and cushioned insole, ensures locked-in support and comfort. The low profile shoe has fixed TPU studs and 6 removable studs for traction, stability and control. Under Armour branding completes the design. '
        ]);
        Product::create([
            'name' => 'Canons Mens Trainers',
            'slug' => 'lonsdale-canons-mens-trainers',
            'details' => 'Lonsdale Canons Mens Trainers',
            'price' => 29,
            'description' => 'Grab some simple style and fashion in these Lonsdale Canons Mens Trainers! The high top design makes sure that the Lonsdale Canons Mens Trainers stand out from he crowd with eye catching looks and a unique silhouette. Completer with a chunky sole unit for improved comfort and cushioning as the padded collar and tongue deliver a superb firm hold with help from the lace up fastening. '
        ]);
        Product::create([
            'name' => 'Poipu Shoes Menss',
            'slug' => 'kangol-poipu-shoes-mens',
            'details' => 'Kangol Poipu Shoes Mens',
            'price' => 23,
            'description' => 'These Kangol Poipu Shoes are great when it comes to support and comfort. Built with a full lace fastening and a padded, shaped ankle collar, they are bound to fit you perfectly so you can wear them all day. They are crafted with a textured outsole for grip to allow security when walking along with panel stitching for a stylish design. '
        ]);
        Product::create([
            'name' => 'Technique Leather Trainers Mens',
            'slug' => 'technique-leather-trainers-mens',
            'details' => 'Reebok Technique Leather Trainers Mens',
            'price' => 30,
            'description' => 'These Reebok Technique Leather Trainers are crafted with lace up fastening and a padded ankle collar for a secure, locked in fit. They feature a cushioned insole for comfort as well as a thick midsole. These trainers are designed with a non marking sole and tonal stitching. They have perforated detail for breathability and are complete with Reebok branding.'
        ]);
        Product::create([
            'name' => 'GOrun 5 Mens Running Shoes',
            'slug' => 'run-mens-running-shoes',
            'details' => 'Skechers GOrun 5 Men Running Shoes',
            'price' => 80,
            'description' => 'These Skechers GOrun 5 Mens Running Shoes have been crafted with a GOknit upper provides security while maintaining breathability and the lightweight, responsive 5GEN cushioning softens the impact of each landing and absorbs shock for a more comfortable ride. These running shoes have a midfoot striking zone for greater efficiency in each stride, whilst the Quick-Fit feature allows for an easy on and off and the Skechers branding completes the stylish look. '
        ]);
    }
}
