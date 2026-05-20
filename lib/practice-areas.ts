export type FAQ = { q: string; a: string };

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  description: string;
  body: string[];
  keyPoints: string[];
  faqs: FAQ[];
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
    faqs: [
      { q: "How long do I have to file a vehicle accident claim in Texas?", a: "Texas law gives you 2 years from the date of the accident to file a personal injury lawsuit. Acting quickly is critical — evidence disappears and witnesses' memories fade. Contact Trafalgar Law as soon as possible." },
      { q: "What is comparative fault in Texas car accident cases?", a: "Texas follows a 'modified comparative fault' rule. You can recover damages as long as you are not more than 50% at fault. However, your compensation is reduced by your percentage of fault. An attorney can help minimize your share of fault." },
      { q: "What damages can I recover after a vehicle collision in Texas?", a: "You may be entitled to medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, property damage, and in serious cases, punitive damages." },
      { q: "Do I need a lawyer if the other driver's insurance accepted liability?", a: "Yes. Insurance companies often accept liability while still minimizing the payout. An attorney ensures your full damages — including future medical costs and pain and suffering — are properly valued and paid." },
      { q: "How much does a car accident lawyer cost in Austin?", a: "Trafalgar Law works on a contingency fee basis — you pay nothing upfront and owe nothing unless we win your case. Your consultation is always free." },
      { q: "What should I do immediately after a car accident in Texas?", a: "Call 911, seek medical attention even if you feel fine, document the scene with photos, collect witness information, and contact a personal injury attorney before speaking to any insurance adjuster." },
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
    faqs: [
      { q: "How long do I have to file a slip and fall claim in Texas?", a: "You have 2 years from the date of your injury to file a premises liability claim in Texas. Do not wait — evidence like surveillance footage is often overwritten within days." },
      { q: "What do I need to prove in a slip and fall case?", a: "You must show the property owner knew or should have known about the dangerous condition, failed to fix or warn about it, and that this failure caused your injuries. Trafalgar Law investigates every element thoroughly." },
      { q: "Can I sue a store or restaurant for a slip and fall?", a: "Yes. Businesses owe customers a duty of reasonable care. If a wet floor, broken display, or cluttered aisle caused your fall and the business failed to address it, you may have a strong premises liability claim." },
      { q: "What if I was partially at fault for my slip and fall?", a: "Under Texas comparative fault rules, you can still recover as long as you are not more than 50% responsible. Your compensation is reduced by your percentage of fault." },
      { q: "What damages can I recover in a slip and fall case?", a: "Medical bills, future medical care, lost wages, loss of earning capacity, pain and suffering, and emotional distress are all potentially recoverable depending on the facts of your case." },
      { q: "How much does a slip and fall lawyer cost?", a: "Trafalgar Law handles all cases on contingency — no upfront fees, no cost to you unless we win. Your initial consultation is always free and confidential." },
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
    faqs: [
      { q: "Can I sue my employer for a workplace accident in Texas?", a: "If your employer subscribes to workers' compensation, your recovery may be limited. However, if a third party (contractor, equipment manufacturer) caused your injury, you may have a separate personal injury claim outside of workers' comp." },
      { q: "What is a third-party claim in a construction accident?", a: "A third-party claim allows you to sue someone other than your employer — such as a subcontractor, equipment manufacturer, or property owner — whose negligence contributed to your accident. These claims often allow for greater compensation than workers' comp alone." },
      { q: "How long do I have to file a commercial accident claim in Texas?", a: "Generally 2 years from the date of injury for personal injury claims. Product liability claims may have different timelines. Contact us as soon as possible to protect your rights." },
      { q: "What if defective equipment caused my workplace injury?", a: "You may have a product liability claim against the manufacturer or distributor of the defective equipment, in addition to any workers' compensation benefits. These claims can result in significant compensation." },
      { q: "What damages can I recover in a commercial accident case?", a: "Depending on your case, you may be able to recover medical expenses, lost wages, future earning capacity, pain and suffering, and in some cases punitive damages where gross negligence is involved." },
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
    faqs: [
      { q: "Who is at fault in a pedestrian accident in Texas?", a: "Liability depends on the circumstances. Drivers who fail to yield at crosswalks, run red lights, or drive while distracted or impaired are typically at fault. Texas law protects pedestrian rights and Trafalgar Law knows how to prove driver negligence." },
      { q: "What if a driver fled after hitting me?", a: "Hit-and-run pedestrian accidents can be covered by your own uninsured motorist coverage. Even without identifying the driver, you may still recover compensation. We investigate these cases aggressively." },
      { q: "How much is a pedestrian accident case worth in Texas?", a: "Pedestrian accidents often result in severe injuries, which means higher compensation potential. Factors include your medical costs, severity of injury, lost income, and long-term impact. We fight for the maximum your case is worth." },
      { q: "How long do I have to file a pedestrian accident lawsuit in Texas?", a: "Two years from the date of the accident. Do not delay — physical evidence, traffic camera footage, and witness accounts are time-sensitive." },
      { q: "Can I recover if I was jaywalking when I was hit?", a: "Possibly. Under Texas's comparative fault rules, you can still recover compensation if you were less than 51% at fault. Even if you were jaywalking, a reckless or distracted driver may still bear the majority of responsibility." },
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
    faqs: [
      { q: "Who can file a wrongful death claim in Texas?", a: "Under Texas law, a wrongful death claim can be filed by the surviving spouse, children, or parents of the deceased. If no family members file within 3 months, the executor of the estate may file on behalf of the estate." },
      { q: "How long do I have to file a wrongful death lawsuit in Texas?", a: "Generally 2 years from the date of death. Texas wrongful death cases are time-sensitive — evidence must be preserved and claims filed properly. Contact us immediately." },
      { q: "What damages are available in a Texas wrongful death case?", a: "Surviving family members can recover for loss of financial support, loss of companionship and consortium, mental anguish, funeral and burial expenses, and in some cases punitive damages where gross negligence is involved." },
      { q: "What is a survival claim and how is it different from wrongful death?", a: "A survival claim is brought on behalf of the deceased's estate for the suffering the victim experienced before death. A wrongful death claim compensates surviving family members for their own losses. Both types of claims can be filed simultaneously." },
      { q: "Can I file a wrongful death claim if my loved one also had a workers' comp case?", a: "Potentially yes. If a third party's negligence contributed to the death — such as a contractor, equipment manufacturer, or driver — a wrongful death claim separate from workers' comp may be available. We analyze every avenue of recovery." },
      { q: "How much does a wrongful death lawyer cost in Texas?", a: "Trafalgar Law handles wrongful death cases on a contingency fee basis. You pay nothing unless we win. We cover all case costs upfront so your family can focus on grieving and healing." },
    ],
    metaTitle: "Wrongful Death Attorney Austin TX | Trafalgar Law",
    metaDescription:
      "Lost a loved one due to negligence in Austin or San Antonio? Trafalgar Law pursues justice for your family. Free consultation — no fee unless we win.",
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}
