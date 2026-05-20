export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  description: string;
  body: string[];
  keyPoints: string[];
  metaTitle: string;
  metaDescription: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "vehicle-collisions",
    title: "Vehicle Collision Accidents",
    shortTitle: "Vehicle Collisions",
    icon: "🚗",
    tagline: "Injured in a crash? We hold negligent drivers accountable.",
    description:
      "Car, truck, and motorcycle accidents can leave victims with devastating injuries and mounting bills. Trafalgar Law fights to recover every dollar you deserve.",
    body: [
      "Vehicle collisions are one of the leading causes of serious injury in Texas. Whether you were hit by a distracted driver, a speeding truck, or a drunk motorist, you have the right to full compensation — and we fight hard to get it.",
      "At Trafalgar Law, we investigate the crash scene, gather evidence, work with accident reconstruction experts, and take on insurance companies who try to minimize your claim. We handle everything so you can focus on healing.",
      "Our firm represents victims of car accidents, 18-wheeler collisions, motorcycle crashes, rideshare accidents (Uber/Lyft), and more. No matter how complex your case, we are committed to maximum results.",
    ],
    keyPoints: [
      "Car, truck & 18-wheeler collisions",
      "Motorcycle & rideshare accidents",
      "Distracted and drunk driving crashes",
      "Uninsured/underinsured motorist claims",
      "Hit-and-run accidents",
    ],
    metaTitle: "Austin Vehicle Collision Lawyer | Trafalgar Law",
    metaDescription:
      "Injured in a car, truck, or motorcycle accident in Austin or San Antonio? Trafalgar Law fights for maximum compensation. Free consultation — no fee unless we win.",
  },
  {
    slug: "slip-and-fall",
    title: "Slip & Fall Accidents",
    shortTitle: "Slip & Fall",
    icon: "⚠️",
    tagline: "Property owners must keep you safe. When they don't, we act.",
    description:
      "Slip, trip, and fall injuries caused by unsafe property conditions can be serious and long-lasting. We hold negligent property owners and businesses accountable.",
    body: [
      "Property owners in Texas have a legal duty to maintain safe conditions. When wet floors, broken stairs, poor lighting, or uneven pavement cause your injury, you may have a premises liability claim.",
      "Trafalgar Law investigates the hazardous condition, documents your injuries, and builds a compelling case against the negligent owner or business. We deal with their insurers so you don't have to.",
      "We handle slip and fall cases at grocery stores, restaurants, parking lots, apartment complexes, hotels, and private properties across Austin and San Antonio.",
    ],
    keyPoints: [
      "Wet floors and spills in stores",
      "Broken or uneven pavement",
      "Poor lighting in parking lots",
      "Dangerous stairways and ramps",
      "Apartment and hotel negligence",
    ],
    metaTitle: "Austin Slip and Fall Attorney | Trafalgar Law",
    metaDescription:
      "Hurt in a slip and fall in Austin or San Antonio? Trafalgar Law holds negligent property owners accountable. Free consultation — no fee unless we win.",
  },
  {
    slug: "commercial-accidents",
    title: "Commercial Accidents",
    shortTitle: "Commercial Accidents",
    icon: "🏗️",
    tagline: "Workplace and construction injuries demand aggressive representation.",
    description:
      "Commercial and workplace accidents often involve multiple parties — employers, contractors, and equipment manufacturers. We cut through the complexity to win your case.",
    body: [
      "Commercial accident cases are among the most complex in personal injury law. They can involve workplace injuries, construction site accidents, defective equipment, and negligent employers or contractors — often with multiple responsible parties.",
      "Trafalgar Law has the experience and resources to investigate these multi-party cases thoroughly. We identify every at-fault party, from the general contractor to the equipment manufacturer, and pursue all available insurance coverage.",
      "If you were hurt on a job site, in a commercial vehicle accident, or by defective commercial equipment, you may have a claim beyond workers' compensation. Call us — the consultation is free.",
    ],
    keyPoints: [
      "Construction site accidents",
      "Commercial vehicle crashes",
      "Defective equipment injuries",
      "Employer and contractor negligence",
      "Multi-party liability cases",
    ],
    metaTitle: "Commercial Accident Attorney Austin TX | Trafalgar Law",
    metaDescription:
      "Injured in a commercial or workplace accident in Austin or San Antonio? Trafalgar Law fights for full compensation. Free consultation — no fee unless we win.",
  },
  {
    slug: "pedestrian-accidents",
    title: "Pedestrian Accidents",
    shortTitle: "Pedestrian Accidents",
    icon: "🚶",
    tagline: "Pedestrians have rights. We enforce them.",
    description:
      "Pedestrians struck by vehicles suffer some of the most severe injuries of any accident type. We fight hard to hold the at-fault driver fully responsible.",
    body: [
      "Being struck by a vehicle as a pedestrian can result in catastrophic injuries — broken bones, traumatic brain injuries, spinal damage, and worse. Texas law protects pedestrian rights, and drivers who fail to yield or drive recklessly must be held accountable.",
      "Trafalgar Law builds strong pedestrian accident cases by analyzing traffic camera footage, witness statements, and driver behavior. We pursue full compensation for your medical expenses, lost wages, and pain and suffering.",
      "Whether you were hit in a crosswalk, on a sidewalk, or in a parking lot, we are ready to fight for you. Our clients come first, and we don't stop until justice is served.",
    ],
    keyPoints: [
      "Crosswalk and intersection accidents",
      "Hit-and-run pedestrian crashes",
      "Distracted driver collisions",
      "School zone and parking lot incidents",
      "Catastrophic injury cases",
    ],
    metaTitle: "Austin Pedestrian Accident Lawyer | Trafalgar Law",
    metaDescription:
      "Struck by a vehicle as a pedestrian in Austin or San Antonio? Trafalgar Law fights for maximum compensation. Free consultation — no fee unless we win.",
  },
  {
    slug: "wrongful-death",
    title: "Wrongful Death",
    shortTitle: "Wrongful Death",
    icon: "⚖️",
    tagline: "When negligence costs a life, families deserve justice.",
    description:
      "Losing a loved one due to someone else's negligence is devastating. We stand beside families to pursue justice and secure the financial future they deserve.",
    body: [
      "The wrongful death of a family member is one of the most painful experiences a family can endure. When that loss is caused by another's negligence — whether in a car crash, a workplace accident, or medical malpractice — the family has the right to seek justice.",
      "Texas wrongful death law allows surviving spouses, children, and parents to file claims for funeral expenses, loss of financial support, loss of companionship, and emotional anguish. Trafalgar Law handles these sensitive cases with the compassion and intensity they deserve.",
      "We take the time to understand your family's loss and build the strongest possible case on your behalf. You focus on your family. We focus on justice.",
    ],
    keyPoints: [
      "Fatal vehicle accidents",
      "Workplace fatality claims",
      "Medical malpractice deaths",
      "Premises liability fatalities",
      "Survival and loss of companionship claims",
    ],
    metaTitle: "Wrongful Death Attorney Austin TX | Trafalgar Law",
    metaDescription:
      "Lost a loved one due to negligence in Austin or San Antonio? Trafalgar Law pursues justice for your family. Free consultation — no fee unless we win.",
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}
