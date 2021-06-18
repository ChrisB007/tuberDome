import { CheckIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const pricing = {
  tiers: [
    {
      title: 'Freelancer',
      price: 24,
      frequency: '/month',
      description: 'The essentials to provide your best work for clients.',
      features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Startup',
      price: 32,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
    {
      title: 'Enterprise',
      price: 48,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const creators = () => {
  return (
      <>
    <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
      Content Creators
      </h2>
      <p className="text-1xl text-margin">
            If you have accumulated 300,000 subscribers on YouTube, chances are you are already here on TuberDome. You know how much it takes to put your videos together, the time and money you invest in making your videos entertaining as well as resourceful to your subscribers. 
            We serve as Link liaison between your channels and marketers who would like to align their products or services with your channels.
            </p>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">One less thing you have to worry about</p>
            <p className="text-1xl">Sponsorships comes in various forms, it might be through financial support, product and/or services giveaways. Our services ensures that your channels
            are best positioned for sponsorship with companies whose brands coincides with yours.
            </p>
            <p className="text-margin text-1xl">While you focus on being creative with your videos and growing your channels, doing the heavy lifting in regards to 
            sponsorship is what we pride ourselves on - From finding and talking to potential sponsors, collecting and distributing payments on schedule, and providing measurable analytics, making sure the light never goes out on your channels is 
            one of the values we bring to the table.
            </p>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">Channel vs Video Sponsorships</p>
            <p className="text-1xl">Brands may choose to sponsor either your entire channel or one video.</p>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">Rates and Payment terms</p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 py-1.5 px-4 bg-red-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="flex-shrink-0 w-6 h-6 text-red-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="#" className={classNames( tier.mostPopular ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-red-50 text-red-700 hover:bg-red-100',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              )}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  )
}


