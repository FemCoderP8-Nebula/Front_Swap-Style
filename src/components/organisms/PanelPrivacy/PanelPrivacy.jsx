import Accuracy from "../../molecules/TextPrivacy/Accuracy/Accuracy";
import Browsing from "../../molecules/TextPrivacy/Browsing/Browsing";
import Categories from "../../molecules/TextPrivacy/Categories/Categories";
import Changes from "../../molecules/TextPrivacy/Changes/Changes";
import Collection from "../../molecules/TextPrivacy/Collection/Collection";
import Consent from "../../molecules/TextPrivacy/Consent/Consent";
import Content from "../../molecules/TextPrivacy/Content/Content";
import Cookie from "../../molecules/TextPrivacy/Cookie/Cookie";
import Identity from "../../molecules/TextPrivacy/Identity/Data";
import LegalBasis from "../../molecules/TextPrivacy/LegalBasis/LegalBasis";
import Principles from "../../molecules/TextPrivacy/Principles/Principles";
import PrivacyPolicy from "../../molecules/TextPrivacy/PrivacyPolicy/intro";
import Purpose from "../../molecules/TextPrivacy/Purpose/Purpose";
import Recipient from "../../molecules/TextPrivacy/Recipient/Recipient";
import Retention from "../../molecules/TextPrivacy/Retention/Retention";
import Revocability from "../../molecules/TextPrivacy/Revocability/Revocability";
import Rights from "../../molecules/TextPrivacy/Rights/Rights";
import Security from "../../molecules/TextPrivacy/Security/Security";
import Truth from "../../molecules/TextPrivacy/Truth/Truth";

function PanelPrivacy(){

    return(
        <>
        <PrivacyPolicy/>
        <Identity/>
        <Principles/>
        <Collection/>
        <Rights/>
        <Purpose/>
        <Security/>
        <Content/>
        <Cookie/>
        <LegalBasis/>
        <Categories/>
        <Retention/>
        <Recipient/>
        <Browsing/>
        <Accuracy/>
        <Truth/>
        <Consent/>
        <Revocability/>
        <Changes/>
        </>
    )
}

export default PanelPrivacy;